import './index.css'

export default function App() {
  return (
    <div>
      <div class='grid items-center justify-center w-auto grid-cols-3 p-5 h-11 '>
        <h3>HTML + TailwindCSS</h3>

        <input
          id='Outlined'
          name='Outlined'
          type='text'
          class='h-10 w-auto p-1.5 shadow-xl border-b-2 rounded-full border-gray-300 hover:border-gray-700 text-black placeholder-transparent 
                focus:outline-none focus:border-pink-300'
          placeholder='Outlined'
        />

        <button>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='w-10 h-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </button>
      </div>
      <br />
      <hr />

      <div class='grid items-center justify-center w-auto grid-cols-2 p-5 h-11 '>
        <div class='w-4/5 p-5 '>
          <iframe
            width='920'
            height='560'
            src='https://www.youtube.com/embed/dJ9uVVNWClk'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </div>

        <div class='grid grid-flow-row grid-cols-2 gap-5 p-5 m-3 border-2 '></div>
      </div>
    </div>
  )
}
