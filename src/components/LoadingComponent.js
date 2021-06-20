import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react'
import './LoadingComponent.css'

export default function LoadingComponent() {
    return (
        <div className="isLoading">
            <Dimmer active inverted>
                <Loader inverted size='large'>
                   <h2>Loading</h2>
                </Loader>
            </Dimmer>
        </div>
    )
}
