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

const useHook = (collectionName: string) => {
    const [error, setError] = useState("");
    const [items, setItems] = useState([]);
    const [itemDetail, setItemDetail] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const getItems = useCallback(async () => {
        const arr: any = [];
        const q = query(collection(db, collectionName), orderBy("createdAt", "desc"));
        const data = await getDocs(q);
        data.forEach((doc) => {
            arr.push({ tid: doc.id, ...doc.data() });
        });
        setItems(arr);
        setLoading(false);
    }, [collectionName]);

    const getItemsWhere = useCallback(async (category: string) => {
        const arr: any = [];
        const q = query(collection(db, collectionName), orderBy("createdAt", "desc"), where("category", "==", category));
        const data = await getDocs(q);
        data.forEach((doc) => {
            arr.push({ tid: doc.id, ...doc.data() });
        });
        setItems(arr);
        setLoading(false);
    }, [collectionName]);

    const getItemDetail = async (id: string) => {
        const docRef = doc(db, collectionName, id);
        const res = await getDoc(docRef);
        setLoading(false);
        if (res.exists()) {
            setItemDetail(res.data());
            console.log(res.data())
        } else {
            setError("Данный отзыв не найден!");
        }
    };

    const handleSearch = async (searchValue: string, title: any) => {
        if (!searchValue?.trim()) return;

        const dataQuery = query(
            collection(db, collectionName),
            where('category', '==', title),
            where(
                'searchWords',
                'array-contains-any',
                [searchValue.toLowerCase(), searchValue.toLowerCase() + '\uf8ff']
            ),
        );

        const querySnapshot = await getDocs(dataQuery);
        const dataItems: any[] = [];
        querySnapshot.forEach((doc) => {
            dataItems.push({ id: doc.id, ...doc.data() });
        });
        console.log(dataItems)
        setItems(dataItems);
    };

    return {
        isLoading,
        items,
        getItems,
        itemDetail,
        getItemDetail,
        getItemsWhere,
        error,
        handleSearch
    };
};

export default useHook;
