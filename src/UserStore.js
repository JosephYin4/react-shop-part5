import { atom, useAtom } from 'jotai';

const jwtAtom = atom(null);

export function useJwt() {
  const [jwt, setJwtAtom] = useAtom(jwtAtom);

  const setJwt = (newJwt) => {
    localStorage.setItem('jwt', newJwt);
    setJwtAtom(newJwt);
  };

  const getJwt = () => {
    const storedJwt = localStorage.getItem('jwt');
    if (storedJwt && !jwt) {
      setJwtAtom(storedJwt);
    }
    return jwt || storedJwt;
  };

  const clearJwt = () => {
    localStorage.removeItem('jwt');
    setJwtAtom(null);
  };

  return { jwt, setJwt, getJwt, clearJwt };
}

 /* const updateCart = async () => {
    setIsUpdating(true);
    const jwt = getJwt();
    
    if (!jwt) {
      console.error('No JWT token found');
      setIsUpdating(false);
      // Optionally redirect to login
      return;
    }
  
    try {
      const updatedCart = cart.map((item) => ({
        product_id: item.product_id,
        quantity: item.quantity
      }));
  
      await axios.put(import.meta.env.VITE_API_URL + '/api/cart', { cartItems: updatedCart }, {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      });
    } catch (error) {
      console.error('Error updating cart:', error);
      if (error.response && error.response.status === 403) {
        // Handle 403 Forbidden specifically
        // For example: clear JWT, redirect to login
        clearJwt();
        // Redirect logic here
      }
    } finally {
      setIsUpdating(false);
    }
  }; */