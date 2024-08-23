export default function StudentList(props) {
    console.log(props)
    return (
        <>
            <h1>Danh sách học sinh</h1>
        </>
    )
}

export async function getServerSideProps(context) {

    return {
        props: {
            students: [
                {
                    id: 1,
                    name: "hai"
                }
            ]
        }
    }
}