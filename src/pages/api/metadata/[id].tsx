import { NextApiHandler } from 'next';

const { APP_URL } = process.env;

const Metadata: NextApiHandler = (req, res) => {
  const tokenId = req.query.id;

  return res.json({
    description: 'NFT PoC',
    external_url: `${APP_URL}/api/metadata/${tokenId}`,
    image: `${APP_URL}/images/${tokenId}.jpg`,
    name: `NFT PoC #${tokenId}`,
  });
};

export default Metadata;
