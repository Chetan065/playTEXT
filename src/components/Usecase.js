import React from 'react'

export default function Usecase() {
    return (
        <>
        <div className="accordion m-5" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      <strong>UpperCase to LowerCase and Vice-Versa #1</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
      <div className="accordion-body">
        <strong>UpperCase to LowerCase and Vice-Versa</strong> Uppercase to Lowercase:

Description: Convert your uppercase text to lowercase effortlessly. Whether it's for consistency or stylistic preferences, this tool ensures smooth transformation.
Lowercase to Uppercase:

Description: Transform your lowercase text to uppercase with ease. Perfect for headings, acronyms, or emphasizing key points in your content.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      <strong>Count No of Words,Characers,Letters,Spaces,Time to read #2</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
      <div className="accordion-body">
        <strong>Count No of Words,Characers,Letters,Spaces,Time to read</strong> Count Number of Words:

Description: Quickly determine the total number of words in your text. This feature is invaluable for essays, reports, and any content requiring precise word counts.
Count Number of Characters:

Description: Easily calculate the overall character count in your text. Keep track of your content's length for various requirements.
Count Number of Letters:

Description: Efficiently count the letters in your text. Useful for character limits, analyzing text compositions, and more.
Count Number of Spaces:

Description: Instantly find out how many spaces are in your text. Useful for understanding formatting and structuring.
Time to Read:

Description: Estimate the time it takes to read your text at a natural pace. This feature is perfect for gauging how long your content will engage your readers.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      <strong>Copy Text , Clear Text #3</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
      <div className="accordion-body">
        <strong>Copy Text , Clear Text</strong> Copy Text:

Description: Seamlessly copy your text selection to the clipboard for easy sharing, pasting, or saving. Effortlessly move your content where you need it.
Clear Text:

Description: Start with a clean slate by instantly clearing the text area. Streamline your editing process and begin fresh with just a single click.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
      <strong>Preview and Remove Extra Space #4</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
      <div className="accordion-body">
        <strong>Preview and Remove Extra Space</strong> Preview:

Description: Visualize how your text will appear before committing changes. Preview allows you to ensure your formatting is just right, making editing a breeze.
Remove Extra Space:

Description: Eliminate unnecessary spaces from your text with a simple click. This tool tidies up your content, ensuring it looks polished and professional.
      </div>
    </div>
  </div>
</div>
        </>
    )
}
