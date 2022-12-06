import { useState, useEffect } from "react";

const cohort = '2211-ftb-et-web-ft';

export const getStuff = async () => {
    const response = await fetch(`https://strangers-things.herokuapp.com/api/${cohort}/posts`);
    const stuff = response.json();
    return (stuff.data.posts)
}