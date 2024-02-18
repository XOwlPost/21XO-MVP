import { useContract } from '@thirdweb-dev/react';
import { useEffect, useState } from 'react';

const UserProfileBlockchain = ({ id }) => {
  const [userTokens, setUserTokens] = useState([]);
  const contract = useContract('<Your-Contract-Address>');

  useEffect(() => {
    const fetchUserTokens = async () => {
      // Example: Fetching user's token holdings from a smart contract
      const tokens = await contract.call('getUserTokens', id);
      setUserTokens(tokens);
    };

    if (id && contract) {
      fetchUserTokens();
    }
  }, [id, contract]);

  return (
    <div>
      <h1>User Blockchain Data</h1>
      {/* Display blockchain data */}
    </div>
  );
};

export default UserProfileBlockchain;
