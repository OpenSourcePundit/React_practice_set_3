export const PS8_DONATION = ({ donationData }) => {
  return (
    <h3>
      Total Donation Collected:
      {donationData.reduce((amount, person) => {
        return amount + person.Donation;
      }, 0)}
    </h3>
  );
};
