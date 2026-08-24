import { embedSnippet } from '../utils';

interface ShareResultProps {
  vanityUrl: string;
  tokenUrl: string;
}

export default function ShareResult({ vanityUrl, tokenUrl }: ShareResultProps) {
  const pretty = vanityUrl || tokenUrl;
  const embed = embedSnippet(pretty);

  function copy(value: string) {
    navigator.clipboard.writeText(value).catch(() => {});
  }

  return (
    <div className="share-result">
      <label>PDF link</label>
      <div className="row">
        <input readOnly value={pretty} />
        <button
          className="secondary inline"
          type="button"
          style={{ flex: '0 0 auto', marginTop: '0.35rem' }}
          onClick={() => copy(pretty)}
        >
          Copy
        </button>
      </div>
      <label>Embed code</label>
      <div className="row">
        <textarea readOnly rows={3} value={embed} />
        <button
          className="secondary inline"
          type="button"
          style={{ flex: '0 0 auto', marginTop: '0.35rem' }}
          onClick={() => copy(embed)}
        >
          Copy
        </button>
      </div>
    </div>
  );
}
