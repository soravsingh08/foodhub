const ShimmerAbout = () => {
  return (
    <div className="about-page">
      <div className="shimmer-title"></div>

      <div className="shimmer-text"></div>
      <div className="shimmer-text short"></div>

      <div className="shimmer-section"></div>

      <div className="shimmer-founder">
        <div className="shimmer-avatar"></div>
        <div className="shimmer-lines">
          <div></div>
          <div></div>
          <div className="short"></div>
        </div>
      </div>

      <div className="shimmer-section"></div>

      <div className="shimmer-team">
        {Array(6)
          .fill("")
          .map((_, i) => (
            <div key={i} className="shimmer-team-card">
              <div className="shimmer-avatar small"></div>
              <div className="shimmer-lines">
                <div></div>
                <div className="short"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShimmerAbout;
