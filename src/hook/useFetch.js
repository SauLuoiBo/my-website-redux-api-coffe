import axios from "axios";
import {useState, useEffect} from "react";


export const useFetch = (url, initialValue) => {
	const [data, setData] = useState(initialValue);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchData = async function () {
			try {
				setLoading(true);
				const response = await axios.get(url);
				if (response.status === 200) {
					setData(response.data);
                    // setContacts(response.data)
				}
			} catch (error) {
				throw error;
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [url]);
	return { loading, data };
};
