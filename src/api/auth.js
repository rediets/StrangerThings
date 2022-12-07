import { useState, useEffect } from "react";

const cohort = '2211-ftb-et-web-ft';

export const getStuff = async () => {
    try {
        const response = await fetch(`https://strangers-things.herokuapp.com/api/${cohort}/posts`);
        const stuff = await response.json();
        return (stuff.data.posts)
    } catch (error) {
        console.error(error);
    }
}