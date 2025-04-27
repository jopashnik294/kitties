import React from 'react'
import { useState, useEffect } from 'react'
import CatImage from '../CatImage/CatImage';
import GetCatButton from '../GetCatButton/GetCatButton';
import styles from './Cat.module.scss'

export default function Cat() {
    const [data, setData] = useState({});
    const [isEnabled, setIsEnabled] = useState(false);
    const [isAuto, setisAuto] = useState(false);

    const fetchAPI = async () => {
        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/search');
            const result = await response.json();
            setData(result[0])
        } catch (error) {
            throw new Error(error);
        }
    };

    const handleCheckboxClick = () => {
        setIsEnabled(prev => !prev);
        console.log(!isEnabled);
    };

    const handleAutoClick = () => {
        setisAuto(prev => !prev);
        console.log(!isEnabled);
    };

    const handleCatFetch = () => {
        if (isEnabled) {
            fetchAPI();
        }
    };

    useEffect(() => {
        let intervalId;
        let timeoutId;

        if (isEnabled) {
            if (isAuto) {
                timeoutId = setTimeout(() => {
                    fetchAPI();
                    intervalId = setInterval(fetchAPI, 5000);
                }, 5000);
            }
        }

        return () => {
            clearTimeout(timeoutId);
            clearInterval(intervalId);
        };
    }, [isEnabled, isAuto]);

  return (
    <div className={styles.container}>
        <div className={styles.checkbox}>
            <input
              type="checkbox"
              name="enable"
              onClick={handleCheckboxClick}
            />
            <label htmlFor="enable"> Enabled </label>
        </div>
        <div className={styles.checkbox}>
            <input 
              type="checkbox"
              name="refrash"
              onClick={handleAutoClick}
            />
            <label htmlFor="refrash"> Auto-refrash every 5 second </label>
        </div>
        <GetCatButton onClick={handleCatFetch}/>
        <CatImage src={data.url}/>
    </div>
  )
}
