import type { CaseStudy } from "@/lib/content";

export function CaseVisual({ kind, large = false }: { kind: CaseStudy["visual"]; large?: boolean }) {
  return (
    <div className={`case-visual visual-${kind}${large ? " visual-large" : ""}`} aria-hidden="true">
      {kind === "profiles" && (
        <div className="profile-composition">
          <div className="profile-back"><span /><span /><span /></div>
          <div className="profile-front">
            <div className="profile-cover" />
            <div className="profile-avatar">A</div>
            <p className="mock-name">Profile preview</p>
            <p className="mock-caption">Interests and photos</p>
            <div className="interest-tags"><span>Music</span><span>Outdoors</span><span>Coffee</span></div>
            <div className="mock-gallery"><span /><span /><span /></div>
          </div>
          <div className="gesture-line"><span /> Swipe to explore <span /></div>
        </div>
      )}
      {kind === "streaming" && (
        <div className="stream-composition">
          <div className="message-lines"><span /><span /><span /></div>
          <div className="summary-card">
            <div className="summary-top"><span className="sparkle">+</span><span>Chat summary</span></div>
            <p>A conversation,<br /><em>summarized.</em></p>
            <div className="summary-lines"><span /><span /><span /><span /></div>
            <div className="summary-status"><span /> Receiving text</div>
          </div>
        </div>
      )}
      {kind === "architecture" && (
        <div className="architecture-composition">
          <div className="architecture-label">Post-meeting components</div>
          <div className="architecture-node"><span>01</span><strong>Experience</strong><small>What people see</small></div>
          <div className="architecture-connector" />
          <div className="architecture-node"><span>02</span><strong>State</strong><small>How it behaves</small></div>
          <div className="architecture-connector" />
          <div className="architecture-node"><span>03</span><strong>Data</strong><small>What it relies on</small></div>
        </div>
      )}
      <span className="visual-caption">Original illustration, not a product screenshot</span>
    </div>
  );
}
