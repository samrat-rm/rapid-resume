import Page from "../../atoms/page/Page";

import Background from "../../atoms/background/Background";
import { findUser } from "../../../globals/config/firebaseStorage/userData";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Preview = ({ setPageRef }) => {
    let { userID } = useParams();
    //console.log("id -> ", userID);
    let [userData, setUserData] = useState();

    findUser(userID).then(async (res) => {
        let temp = await res;
        console.log("await res", temp);
        await setUserData(await res);
        console.log("userData -> ", userData.data);
    });

    return (
        <>
            {userData ? (
                <>
                    <Background isgradient />
                    <Page
                        content={userData.data}
                        isVisible={userData.isVisible}
                        setPageRef={setPageRef}
                        isPreview={true}
                    />
                </>
            ) : (
                <h1>Link invalid</h1>
            )}
        </>
    );
};

export default Preview;
