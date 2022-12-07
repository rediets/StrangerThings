const cohort = '2211-ftb-et-web-ft';

export const registerUser = async (username, password) => {
    try {
        const response = await fetch(
            `https://strangers-things.herokuapp.com/api/${cohort}/users/register/`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user: {
                        username,
                        password,
                    },
                }),
            }
        );
        const {
            data: { token },
        } = await response.json();
        return token;
    } catch (error) {
        console.error(error);
    }
};

export const login = async (username, password) => {
    try {
        const response = await fetch(`https://strangers-things.herokuapp.com/api/${cohort}/users/login`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              user: {
                username,
                password
              }
            })
          });
        const {
            data: { token },
        } = await response.json();
        return token;
    } catch (error) {
        console.error(error);
    }
};

export const submitPost = async (title, desc, price, location, deliver, {token}) => {
    try {
        console.log(token);
        const response = await fetch(`https://strangers-things.herokuapp.com/api/${cohort}/posts`, 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                post:{
                    title: `${title}`,
                    description: `${desc}`,
                    price: `${price}`,
                    location: `${location}`,
                    willDeliver: `${deliver}`
                }
            }),
        });
        const { success } = await response.json();
        return success;
    } catch (error) {
        console.error(error);
    }
};