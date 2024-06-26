import React, { useState } from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import go from "../Access/go.gif"
import './Blogposts.css'

const GoCrashCourse = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const copyLinkToClipboard = () => {
        const linkToCopy = "https://jaidensiu.vercel.app/blogs/tour-of-go-part-1";
        // Navigator clipboard API
        navigator.clipboard.writeText(linkToCopy)
            .then(() => {
                setOpenSnackbar(true)
                setTimeout(() => {
                    setOpenSnackbar(false)
                }, 3000)
            })
            .catch((error) => {
                console.error('Unable to copy:', error)
            })
    }
    
    function handleClick(event, sectionId) {
        event.preventDefault();
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <section id='bmeg-electives-guide' className='blogpost section'>
            <div className='blogpost__header'>
                <h2>A Tour of the Go Programming Language - Part 1: Basics</h2>
                <p>June 26, 2024</p>
                <button type="button" className="link" onClick={copyLinkToClipboard}>
                    Copy link
                </button>
                <Snackbar className='copyLinkSnackBar' open={openSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                    <MuiAlert severity="success" variant="filled">
                        Link copied to clipboard.
                    </MuiAlert>
                </Snackbar>
            </div>

            <div className="blogpost__image__container">
                <img className='blogpost__image' src={go} alt='BME' />
            </div>

            <h3 className='blogpost__section__title'>Table of contents</h3>
            <div className='blogpost__section__body'>
                <ul className='bulleted_list'>
                    <li>
                        <a href='#introduction' className='link' onClick={(event) => handleClick(event, 'introduction')}>
                            Introduction
                        </a>
                    </li>
                    <li>
                        <a href='#hello-world' className='link' onClick={(event) => handleClick(event, 'hello-world')}>
                            Hello, World!
                        </a>
                    </li>
                    <li>
                        <a href='#variables' className='link' onClick={(event) => handleClick(event, 'variables')}>
                            Variables
                        </a>
                    </li>
                    <li>
                        <a href='#data-types' className='link' onClick={(event) => handleClick(event, 'data-types')}>
                            Data Types
                        </a>
                    </li>
                    <li>
                        <a href='#print-statements' className='link' onClick={(event) => handleClick(event, 'print-statements')}>
                            Print Statements
                        </a>
                    </li>
                    <li>
                        <a href='#user-inputs' className='link' onClick={(event) => handleClick(event, 'user-inputs')}>
                            User Inputs
                        </a>
                    </li>
                    <li>
                        <a href='#comments' className='link' onClick={(event) => handleClick(event, 'comments')}>
                            Comments
                        </a>
                    </li>
                    <li>
                        <a href='#operators' className='link' onClick={(event) => handleClick(event, 'operators')}>
                            Operators
                        </a>
                    </li>
                    <li>
                        <a href='#conclusion' className='link' onClick={(event) => handleClick(event, 'conclusion')}>
                            Conclusion
                        </a>
                    </li>
                </ul>
            </div>

            <section id='introduction'>
                <h3 className='blogpost__section__title'>Introduction</h3>
                <div className='blogpost__section__body'>
                    <p>
                        In this series of tutorials, we will be going over the Go Programming Language. Basic proficiency with programming and the command line will be assumed. Go is an open source programming language developed at Google designed for building simple, efficient, and reliable production-level software at scale. Go developers are synonymously called Gophers as the mascot is characterized by a friendly-looking blue gopher. You can read more about Go&apos;s branding <a className='link' target='_blank' rel='noopener noreferrer' href='https://go.dev/blog/go-brand'>here</a>.
                    </p>
                    <br />
                    <p>
                        In this first tutorial, we will be going over the basics of programming in Go. To get started, I would suggest to download a text editor like <a className='link' target='_blank' rel='noopener noreferrer' href='https://code.visualstudio.com/download'>VS Code</a> and install <a className='link' target='_blank' rel='noopener noreferrer' href='https://go.dev/doc/install'>Go</a> to follow along. This way, you can learn and get familiar with the Go programming environment. You can find the source code for these series of tutorials <a className='link' target='_blank' rel='noopener noreferrer' href='https://github.com/jaidensiu/Tour-of-Go'>here</a>.
                    </p>
                </div>
            </section>

            <section id='hello-world'>
                <h3 className='blogpost__section__title'>Hello, World!</h3>
                <div className='blogpost__section__body'>
                    <p>
                        To start off, let&apos;s write and run a hello world program. First, initialize a Go module.
                    </p>
                    <p className='codeblock'>
                        $ go mod init hello_world
                    </p>
                    <p>
                        Create a new Go file.
                    </p>
                    <p className='codeblock'>
                        $ touch hello_world.go
                    </p>
                    <p>
                        Write the following code.
                    </p>
                    <pre className='codeblock'>
                        <code>
{
`package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`
}
                        </code>
                    </pre>
                    <p>
                        Finally, compile and run the Go program. 
                    </p>
                    <p className='codeblock'>
                        $ go run hello_world.go
                        <br />
                        Hello, World!
                    </p>
                </div>
            </section>

            <section id='variables'>
                <h3 className='blogpost__section__title'>Variables</h3>
                <div className='blogpost__section__body'>
                    <p>
                        Go is a statically-typed language, hence you must define or have the compiler detect the variable type by looking its value. In Go there are three ways to define a variable with value assignments.
                    </p>
                    <br />
                    <p>Method 1</p>
                    <p className='codeblock'>
                        var num int = 10
                    </p>
                    <p>Method 2</p>
                    <p className='codeblock'>
                        var num = 10
                    </p>
                    <p>Method 3</p>
                    <p className='codeblock'>
                        num := 10
                    </p>
                    <p>
                        You can also declare constant variables.
                    </p>
                    <p className='codeblock'>
                        const num := 10
                    </p>
                </div>
            </section>

            <section id='data-types'>
                <h3 className='blogpost__section__title'>Data Types</h3>
                <div className='blogpost__section__body'>
                    <p>
                        Go&apos;s data types can be summarize in the table below.
                    </p>
                    <table className="blogpost__table">
                        <thead className="blogpost__table__header">
                            <tr>
                                <th>Data Type</th>
                                <th>Description</th>
                                <th>Example</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><p className='inline_code'>int</p></td>
                                <td>An integer number (signed or unsigned 8, 16, 32, or 64 bit format)</td>
                                <td><p className='inline_code'>-1</p></td>
                            </tr>
                            <tr>
                                <td><p className='inline_code'>float</p></td>
                                <td>Number with decimals (32 or 64 bit format)</td>
                                <td><p className='inline_code'>1.22</p></td>
                            </tr>
                            <tr>
                                <td><p className='inline_code'>complex</p></td>
                                <td>A complex number</td>
                                <td><p className='inline_code'>-9.6+3i</p></td>
                            </tr>
                            <tr>
                                <td><p className='inline_code'>string</p></td>
                                <td>A sequence of characters</td>
                                <td><p className='inline_code'>I am a string</p></td>
                            </tr>
                            <tr>
                                <td><p className='inline_code'>bool</p></td>
                                <td>A boolean value</td>
                                <td><p className='inline_code'>true</p></td>
                            </tr>
                            <tr>
                                <td><p className='inline_code'>byte</p></td>
                                <td>An alias for 8-bit unsigned integer to emphasize a raw byte</td>
                                <td><p className='inline_code'>2</p></td>
                            </tr>
                            <tr>
                                <td><p className='inline_code'>rune</p></td>
                                <td>An alias for 32-bit integers to represent Unicode characters</td>
                                <td><p className='inline_code'>-1</p></td>
                            </tr>
                        </tbody>
                    </table>  
                </div>
            </section>

            <section id='print-statements'>
                <h3 className='blogpost__section__title'>Print Statements</h3>
                <div className='blogpost__section__body'>
                    <p>
                        There are 3 functions to print output messages defined under the <p className='inline_code'>fmt</p> package.
                    </p>
                    <br />
                    <ul className='bulleted_list'>
                        <li><p className='inline_code'>fmt.Print()</p></li>
                        <li><p className='inline_code'>fmt.Println()</p></li>
                        <li><p className='inline_code'>fmt.Printf()</p></li>
                    </ul>
                    <p>
                        The difference between <p className='inline_code'>fmt.Print()</p> and <p className='inline_code'>fmt.Println()</p> is that <p className='inline_code'>fmt.Println()</p> prints a new line at the end by default. The <p className='inline_code'>fmt.Printf()</p> function formats uses a unique format specifier based on its data type to format and output the formatted string.
                    </p>
                    <table className="blogpost__table">
                        <thead className="blogpost__table__header">
                            <tr>
                                <th>Data Type</th>
                                <th>Format Specifier</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>integer</td>
                                <td><p className='inline_code'>%d</p></td>
                            </tr>
                            <tr>
                                <td>float</td>
                                <td><p className='inline_code'>%g</p></td>
                            </tr>
                            <tr>
                                <td>string</td>
                                <td><p className='inline_code'>%s</p></td>
                            </tr>
                            <tr>
                                <td>bool</td>
                                <td><p className='inline_code'>%t</p></td>
                            </tr>
                        </tbody>
                    </table>
                    <pre className='codeblock'>
                        <code>
{
`package main

import "fmt"

func main() {
    language := "Go"
    year := 2007
    fmt.Printf("%s was designed at Google in %d.\\n", language, year)
}`
}
                        </code>
                    </pre>
                    <p>
                        Output
                    </p>
                    <p className='codeblock'>
                        Go was designed at Google in 2007.
                    </p>
                </div>
            </section>

            <section id='user-inputs'>
                <h3 className='blogpost__section__title'>User Inputs</h3>
                <div className='blogpost__section__body'>
                    <p>
                        In construction...
                    </p>
                </div>
            </section>

            <section id='comments'>
                <h3 className='blogpost__section__title'>Comments</h3>
                <div className='blogpost__section__body'>
                    <p>
                        In construction...
                    </p>
                </div>
            </section>

            <section id='operators'>
                <h3 className='blogpost__section__title'>Operators</h3>
                <div className='blogpost__section__body'>
                    <p>
                        In construction...
                    </p>
                </div>
            </section>

            <section id='conclusion'>
                <h3 className='blogpost__section__title'>Conclusion</h3>
                <div className='blogpost__section__body'>
                    <p>
                        In construction...
                    </p>
                </div>
            </section>
        </section>
    )
}

export default GoCrashCourse
