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
      {kind === "bubbles" && (
        <div className="bubble-composition">
          <div className="bubble-preview">
            <span className="illustration-label">A conversation, grouped.</span>
            <div className="sample-bubble incoming">Same place tomorrow?</div>
            <div className="sample-bubble outgoing first">Yes, see you there.</div>
            <div className="sample-bubble outgoing last">I&apos;ll bring coffee.</div>
            <div className="sample-compose"><span>Message</span><strong>+</strong></div>
          </div>
          <div className="theme-chip"><span /><span /> Light / dark</div>
        </div>
      )}
      {kind === "progressive" && (
        <div className="image-composition">
          <p className="illustration-label">Progress before the final image.</p>
          <div className="image-stages">
            {["Preview", "Refining", "Ready"].map((label, index) => (
              <div className={`image-stage stage-${index}`} key={label}>
                <div className="preview-frame"><div className="preview-scene" /></div>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className="progress-rail"><span /><span /><span /></div>
          <p className="image-state-note">Waiting has a visible state.</p>
        </div>
      )}
      {kind === "feedback" && (
        <div className="feedback-composition">
          <div className="feedback-note"><span className="illustration-label">Stay in context</span><strong>Report a problem</strong><span>Review before sending</span></div>
          <div className="poll-preview">
            <span className="illustration-label">Update now. Confirm next.</span>
            <strong>When should we meet?</strong>
            <div className="poll-option selected"><span>Saturday</span><span>Your vote</span></div>
            <div className="poll-option"><span>Sunday</span><span /></div>
            <p>Local update &rarr; service &rarr; confirm or roll back</p>
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
