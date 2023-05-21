import '../index.css';
import Search from 'src/components/Search';
import Content from 'src/components/Content';
import { useAppContext } from 'src/context';
import { debounce } from 'src/utils';

const Home = () => {
  const {
    handleSearchQuery,
  } = useAppContext();

  const debouncedCallback = debounce((val: string) => handleSearchQuery(val));

  return (
    <div className="home">
      <Search callback={debouncedCallback} />
        <Content />
    </div>
  );
};

export default Home;
