export const handleRequest = async url => {
  try {
    const response = await fetch(`https://www.balldontlie.io/api/v1/${url}`);
    const json = await response.json();
    return json;
  } catch (e) {
    console.log(e);
    // return new Error(e);
  }
};
