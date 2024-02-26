import SearchForm from './SearchForm';

const HomePage = () => {
  return (
    <div>
      <h1>Star Wars API Navigator</h1>
      <SearchForm resourceType="people" />
    </div>
  );
};

export default HomePage;
