const CatService = {};

CatService.getCatMsg = async function () {
  const response = await fetch('https://catfact.ninja/fact');
  if (!response.ok) {
    throw { message: 'Failed to fetch CAT!.', status: 500 };
  }
  return response.json();
};

export default CatService;
