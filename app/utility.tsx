const fetchUserData = async () => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Fetched Users:", data);
    } catch (error ) {
      console.error("Error fetching data:", error);
    }
  };
  const login = async (url: string, data: any) => {
    const options = {
      method:  'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    }

    const response = await fetch(`http://localhost:3000/${url}`, options)
    if(response.ok){
      return response.json()
    }else{
      const responseJson = await response.json()
      throw new Error(responseJson.message)
    }
  }
  export { fetchUserData, login }