import {
  FC,
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';

export interface IAppContext {
  searchQuery: string;
  images: IImageResponse;
  handleSearchQuery: (query: string) => void;
  getImagesByQuery: (query: string, pagination?: IPagination) => Promise<void>;
  getSingleImage: (id: string) => Promise<IImageResult>;
  getDefaultImages: (pagination: IPagination) => Promise<void>;
  loading: boolean;
}

export interface AppProviderProps {
  children: ReactNode;
}

export interface IImageResult {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  promoted_at: null;
  width: number;
  height: number;
  color: string;
  description: string;
  alt_description: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  likes: number;
  liked_by_user: boolean;
  current_user_collections: [];
  topic_submissions: {};
  user: {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    twitter_username: string;
    portfolio_url: string;
    location: string;
    links: {
      portfolio: string;
    };
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
    instagram_username: string;

    social: {
      portfolio_url: string;
      twitter_username: string;
      paypal_email: string;
    };
  };
}

export interface IImageResponse {
  results: Array<IImageResult>;
  total: number;
  total_pages: number;
  isDefault: boolean;
}

export interface IPagination {
  page: number;
  per_page: number;
}

const AppContext = createContext<IAppContext | null>(null);

const apiUrl = process.env.REACT_APP_API_URL;
const clientId = process.env.REACT_APP_UNSPLASH_CLIENT_ID;

const fetchApi = async (url: string) => {
  let response = await fetch(url);
  return response.json();
};

const defaultPaginatedState = {
  results: [],
  total: 0,
  total_pages: 0,
  isDefault: false,
};

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [images, setImages] = useState<IImageResponse>(defaultPaginatedState);
  const [loading, setLoading] = useState<boolean>(false);

  const getImagesByQuery = async (query?: string, pagination?: IPagination) => {
    const searchParams = new URLSearchParams({
      client_id: clientId!,
      query: query ?? '',
      page: pagination?.page.toString()!,
      per_page: pagination?.per_page.toString()!,
    });

    const url = `${apiUrl}/search/photos?` + searchParams;

    try {
      setLoading(true);
      if (images.isDefault) {
        await new Promise((resolve, reject) => {
          setImages(defaultPaginatedState);
          resolve(true);
        });
      }
      const response = await fetchApi(url);
      setImages((prev) => {
        return {
          ...response,
          results: [...prev.results, ...response.results],
        };
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getDefaultImages = async (pagination?: IPagination) => {
    const searchParams = new URLSearchParams({
      client_id: clientId!,
      page: pagination?.page.toString()!,
      per_page: pagination?.per_page.toString()!,
    });

    const url = `${apiUrl}/photos?` + searchParams;

    try {
      setLoading(true);
      const response = await fetchApi(url);

      setImages((prev) => {
        return {
          results: [...prev.results, ...response],
          total: response.length,
          total_pages: 0,
          isDefault: true,
        };
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getSingleImage = async (id: string) => {
    const response: IImageResult = await fetchApi(
      `${apiUrl}/photos/${id}?client_id=${clientId}`
    );
    return response;
  };

  const handleSearchQuery = (query: string) => setSearchQuery(query);

  useEffect(() => {
    setImages(defaultPaginatedState);
  }, [searchQuery]);

  return (
    <AppContext.Provider
      value={{
        searchQuery,
        images,
        handleSearchQuery,
        getImagesByQuery,
        getSingleImage,
        loading,
        getDefaultImages,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const appContext = useContext(AppContext);
  if (!appContext) {
    throw new Error('App context not found');
  }
  return appContext;
};

export { AppProvider, useAppContext };
