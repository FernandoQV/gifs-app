import { useEffect, useState } from 'react'
import getTrends from 'services/getTrends';

const useTrends = () => {
    const [loading, setLoading] = useState(false);
  const [gifTrends, setGifTrends] = useState([]);
  useEffect(() => {
    setLoading(true);
    getTrends().then((gifs) => {
      setGifTrends(gifs)
      setLoading(false)
    })
  }, []);
    return {loading,gifTrends}
}

export default useTrends
