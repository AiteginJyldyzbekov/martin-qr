import {
    addDoc,
    collection,
    doc,
    getDoc,
    getDocs,
    Timestamp,
    updateDoc,
} from "firebase/firestore";
import { useCallback, useState } from "react";
import { db } from "../config/firebase/firebase";

const useHook = (ref:string) => {
    const [error, setError] = useState("");
    const [items, setItems] = useState([]);
    const [itemDetail, setItemDetail] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const getProducts = useCallback(async () => {
        const arr: any = [];
        const data = await getDocs(collection(db, ref));
        data.forEach((doc) => {
            arr.push({ tid: doc.id, ...doc.data() });
        });
        setItems(arr);
        console.log(arr)
        setLoading(false);
    }, []);

    const getProductDetail = async (id: string) => {
        const docRef = doc(db, ref, id);
        const res = await getDoc(docRef);
        setLoading(false);
        if (res.exists()) {
            setItemDetail(res.data());
            console.log(res.data())
        } else {
            setError("Данный отзыв не найден!");
        }
    };

    return {
        isLoading,
        items,
        getProducts,
        itemDetail,
        getProductDetail,
        error,
    };
};

export default useHook;
