import {useRouter} from "next/router";

export default function StudentDetail() {
    const param = useRouter();
    console.log(param)
}