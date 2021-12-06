import React from 'react'
import * as Layout from '../../Layout';
import { CheckerGame } from "../../Components";

export function Homepage() {
    return (
        <div>
            <Layout.Header />
            <CheckerGame />
        </div>
    )
}
