import { FC } from 'react'

const SvgComponent: FC = (props) => (
  <svg
    className="icon"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    width={200}
    height={200}
    {...props}
  >
    <path d="M172.361 800h431.561c-2.999 57.856-40.283 94.72-91.703 94.72-51.858 0-88.722-36.864-92.16-94.72h-66.852c3.438 82.286 68.15 154.697 159.012 154.697 90.423 0 155.136-72.411 158.574-154.697H851.64c40.722 0 64.731-20.992 64.731-51.858 0-42.862-43.3-81.427-80.585-119.57-28.288-29.569-36.004-90.423-39.003-139.703C793.362 320 750.08 210.706 635.648 169.563c-14.153-55.698-60.434-100.278-123.429-100.278-63.451 0-109.293 44.58-123.867 100.278C274.359 210.706 230.638 320 227.639 488.85c-3.42 49.299-10.716 110.153-39.424 139.721-36.864 38.144-80.567 76.709-80.567 119.589 0 30.848 24.43 51.84 64.713 51.84zm18.853-64.731v-5.12c7.716-12.855 33.005-37.724 55.716-63.013 30.428-34.286 44.983-89.143 48.86-173.13 3.42-186.88 59.136-246.856 132.845-266.568 10.716-2.579 16.293-8.156 16.714-18.871 1.718-44.983 27.008-76.288 66.87-76.288 39.424 0 65.134 31.287 66.432 76.288.421 10.715 6.419 16.274 17.134 18.852 73.29 19.73 129.006 79.726 132.864 266.588 3.42 83.986 17.993 138.843 48.86 173.129 22.272 25.29 47.981 50.158 55.698 63.013v5.12z" />
  </svg>
)

export default SvgComponent