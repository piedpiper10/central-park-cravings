const Shimmer = () => {
  let shimmer = [];
  for (i = 0; i < 15; i++) {
    shimmer.push(
      <div className="shimmer-card" key={i}>
        Cards
      </div>
    );
  }

  return <div className="shimmer-container">{shimmer}</div>;
};

export default Shimmer;
