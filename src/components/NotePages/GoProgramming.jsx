import React, { useState } from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import go from "../Access/go.gif"
import './NotePages.css'

const GoProgramming = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const copyLinkToClipboard = () => {
    const linkToCopy = "https://jaidensiu.vercel.app/notes/go-programming";
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

  const HorizontalLine = () => <hr className='horizontalLine' />

  return (
    <section id='go-programming' className='notepage section'>
      <div className='notepage__header'>
        <h2>Go Programming</h2>
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

      <div className="notepage__image__container">
        <img className='notepage__image' src={go} alt='Go Gopher' />
      </div>

      <h3 className='notepage__section__title'>Table of contents</h3>
      <div className='notepage__section__body'>
        <ul className='bulleted_list'>
          <li>
            <a href='#basics' className='link' onClick={(event) => handleClick(event, 'basics')}>
              Basics
            </a>
          </li>
          <li>
            <a href='#flow-control' className='link' onClick={(event) => handleClick(event, 'flow-control')}>
              Flow Control
            </a>
          </li>
          <li>
            <a href='#data-structures' className='link' onClick={(event) => handleClick(event, 'data-structures')}>
              Data Structures
            </a>
          </li>
          <li>
            <a href='#functions' className='link' onClick={(event) => handleClick(event, 'functions')}>
              Functions
            </a>
          </li>
          <li>
            <a href='#pointers' className='link' onClick={(event) => handleClick(event, 'pointers')}>
              Pointers
            </a>
          </li>
          <li>
            <a href='#interfaces' className='link' onClick={(event) => handleClick(event, 'interfaces')}>
              Interfaces
            </a>
          </li>
          <li>
            <a href='#error-handling' className='link' onClick={(event) => handleClick(event, 'error-handling')}>
              Error Handling
            </a>
          </li>
          <li>
            <a href='#gouroutines' className='link' onClick={(event) => handleClick(event, 'goroutines')}>
              Goroutines
            </a>
          </li>
        </ul>
      </div>

      <section id='basics'>
        <h3 className='notepage__section__title'>Basics</h3>
      </section>

      <HorizontalLine />

      <section id='hello-world'>
        <h4 className='notepage__section__title'>Hello, World!</h4>
        <div className='notepage__section__body'>
          <p>
            To write and run a hello world program, first initialize a Go module.
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
            <code>{
              `package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`
            }</code>
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
        <h4 className='notepage__section__title'>Variables</h4>
        <div className='notepage__section__body'>
          <p>
            Go is a statically-typed language, hence you must define or have the compiler detect the variable type by looking its value. In Go, there are 3 ways to define a variable with value assignments.
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
        <h4 className='notepage__section__title'>Data Types</h4>
        <div className='notepage__section__body'>
          <table className="notepage__table">
            <thead className="notepage__table__header">
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
        <h4 className='notepage__section__title'>Print Statements</h4>
        <div className='notepage__section__body'>
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
            The difference between <p className='inline_code'>fmt.Print()</p> and <p className='inline_code'>fmt.Println()</p> is that <p className='inline_code'>fmt.Println()</p> appends newline character which is an escape sequence. The <p className='inline_code'>fmt.Printf()</p> function uses a unique format specifier based on its data type to format and outputs the formatted string.
          </p>
          <table className="notepage__table">
            <thead className="notepage__table__header">
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
            <code>{
              `package main

import "fmt"

func main() {
    language := "Go"
    year := 2007
    fmt.Printf("%s was designed at Google in %d.\\n", language, year)
}`
            }</code>
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
        <h4 className='notepage__section__title'>User Inputs</h4>
        <div className='notepage__section__body'>
          <p>
            Under construction...
          </p>
        </div>
      </section>

      <section id='comments'>
        <h4 className='notepage__section__title'>Comments</h4>
        <div className='notepage__section__body'>
          <p>
            Under construction...
          </p>
        </div>
      </section>

      <section id='operators'>
        <h4 className='notepage__section__title'>Operators</h4>
        <div className='notepage__section__body'>
          <p>
            Under construction...
          </p>
        </div>
      </section>

      <section id='flow-control'>
        <h3 className='notepage__section__title'>Flow Control</h3>
      </section>

      <HorizontalLine />

      <section id='variables'>
        <h4 className='notepage__section__title'>Under construction...</h4>
        <div className='notepage__section__body'>
          <p>
            More under construction...
          </p>
        </div>
      </section>

      <section id='data-structures'>
        <h3 className='notepage__section__title'>Data Structures</h3>
      </section>

      <HorizontalLine />

      <section id='functions'>
        <h3 className='notepage__section__title'>Functions</h3>
      </section>

      <HorizontalLine />

      <section id='pointers'>
        <h3 className='notepage__section__title'>Pointers</h3>
      </section>

      <HorizontalLine />

      <section id='interfaces'>
        <h3 className='notepage__section__title'>Interfaces</h3>
      </section>

      <HorizontalLine />

      <section id='error-handling'>
        <h3 className='notepage__section__title'>Error Handling</h3>
      </section>

      <HorizontalLine />

      <section id='goroutines'>
        <h3 className='notepage__section__title'>Goroutines</h3>
      </section>

      <HorizontalLine />
    </section>
  )
}

export default GoProgramming