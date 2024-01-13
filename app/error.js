"use client"
import React from 'react'

export default function Error({ error }) {
    return (
        <div className="error">
            <h1>{error.message}</h1>
            <p></p>
        </div>
    )
}
