
export const Statistics = ({ data }) => {
  return (
    <section class="statistics">
      <ul class="stat-list">
        {data.map(item => (
          <li class="item">
            <span class="label">{item.label}</span>
            <span class="percentage">{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
