import {
    addDoc,
    collection,
    doc,
    getDoc,
    getDocs,
    orderBy,
    query,
    Timestamp,
    updateDoc,
    where,
} from "firebase/firestore";
import { useCallback, useState } from "react";
import { db } from "../config/firebase/firebase";

const useHook = (ref:string) => {
    const [error, setError] = useState("");
    const [items, setItems] = useState([]);
    const [itemDetail, setItemDetail] = useState(null);
    const [isLoading, setLoading] = useState(true);
    
    const getItems = useCallback(async () => {
        const arr:any = [];
        const q = query(collection(db, ref), orderBy("createdAt", "desc"));
        const data = await getDocs(q);
        data.forEach((doc) => {
            arr.push({ tid: doc.id, ...doc.data() });
        });
        setItems(arr);
        setLoading(false);
    }, [ref]);

    const getItemsWhere = useCallback(async (category:string) => {
        const arr:any = [];
        const q = query(collection(db, ref), orderBy("createdAt", "desc"), where("category", "==", category));
        const data = await getDocs(q);
        data.forEach((doc) => {
            arr.push({ tid: doc.id, ...doc.data() });
        });
        setItems(arr);
        console.log(arr)
        setLoading(false);
    }, [ref]);

    const getItemDetail = async (id: string) => {
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
        getItems,
        itemDetail,
        getItemDetail,
        getItemsWhere,
        error,
    };
};

export default useHook;
