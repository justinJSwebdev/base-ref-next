"use client"
import { useRef } from "react";
import classes from "./image-picker.module.css"
import Image from "next/image";
import { useState } from "react";
export default function ImagePicker({ label, name }) {
    const inputImageRef = useRef({});
    const [pickedImage, setPickedImage] = useState("");
    const handleClickUploadButton = () => {
        inputImageRef.current.click();
    }
    function handleImageChange(event) {
        const file = event.target.files[0]
        if (!file) {
            setPickedImage(null);
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }
        fileReader.readAsDataURL(file);
    }
    return <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage ? <p>No picked yet</p> : <Image fill src={pickedImage} alt="preview"></Image>}
            </div>
            <input onChange={handleImageChange} type="file" id={name} accept="image/png, image/jpeg" name={name} className={classes.input} ref={inputImageRef} required />
            <label className={classes.button} htmlFor={name} type="button" onClick={handleClickUploadButton}>Pick an image</label>
        </div>
    </div>
}