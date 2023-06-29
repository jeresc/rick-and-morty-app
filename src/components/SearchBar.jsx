import { useState } from "react";
import { styled } from "styled-components";

const InputContainer = styled.div`
  position: relative;
  --width-of-input: 300px;
  display: flex;
  justify-content: space-between;
  gap: 22px;
  align-items: center;
  background: #212121;

  .input {
    color: #fff;
    font-size: 2rem;
    background-color: transparent;
    width: 480px;
    box-sizing: border-box;
    padding-inline: 0.8em;
    padding-block: 1em;
    border: none;
    /* box-shadow: 5px 5px 30px rgb(4, 4, 4), -5px -5px 30px rgb(60, 60, 60); */
    transition: 500ms;
    border-radius: 15px 15px 10px 10px;
  }

  .input-border {
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: 0;
    left: 76px;
    transition: width 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  }

  .input:focus {
    outline: none;
    box-shadow: 5px 5px 30px rgba(4, 4, 4, 0.2),
      -5px -5px 30px rgba(60, 60, 60, 0.2);
    border-radius: 15px 15px 5px 5px;
  }

  .input:focus + .input-border {
    width: 480px;
  }

  .input-alt {
    font-size: 1.9rem;
    padding-inline: 2rem;
    padding-block: 1.4rem;
    box-shadow: 5px 5px 30px rgba(4, 4, 4, 0.7),
      -5px -5px 30px rgba(60, 60, 60, 0.7);
  }

  .input-border-alt {
    height: 4px;
    /* background: linear-gradient(90deg, #ff6464 0%, #ffbf59 50%, #47c9ff 100%); */
    /* background: linear-gradient(90deg, #af40ff, #5b42f3 50%, #00ddeb); */
    background: linear-gradient(144deg, #f3f520, #a8d102 50%, #00ddeb);
    transition: width 0.4s cubic-bezier(0.42, 0, 0.58, 1);
    /* box-shadow: -5px 5px 30px rgba(175, 64, 255, 0.6),
      5px 5px 30px rgba(0, 221, 235, 0.4); */
    box-shadow: -5px 5px 30px rgba(243, 245, 32, 0.6),
      5px 5px 30px rgba(0, 221, 235, 0.4);
  }

  .input-alt:focus + .input-border-alt {
    width: 480px;
  }

  @media (max-width: 1110px) {
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 15px;
    z-index: 30;
    width: 100%;

    .input-border {
      height: 4px;
      bottom: 15px;
      left: calc(50% - 264px);
    }
  }

  @media (max-width: 720px) {
    .input-border {
      display: none;
    }
  }

  @media (max-width: 440px) {
    .input {
      min-width: 200px;
    }

    .input::placeholder {
      color: transparent;
    }
  }
`;

const NavButton = styled.button`
  border: none;
  box-shadow: 5px 5px 30px rgba(4, 4, 4, 0.6),
    -5px -5px 30px rgba(60, 60, 60, 0.6);
  border-radius: 17px;
  outline: none;
  min-width: 50px;
  height: 50px;
  color: #fff;
  font-size: 1.7rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.4s ease;
  background: linear-gradient(144deg, #f3f520, #a8d102 50%, #00ddeb);

  span {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background-color: #212121;
    color: #fff;
    font-size: 1.7rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 27px;
    height: 27px;
  }

  &:hover span {
    background: none;
  }

  &:hover {
    box-shadow: 5px 5px 30px rgba(0, 221, 235, 0.4),
      -5px -5px 30px rgba(243, 245, 32, 0.3);
  }

  &:hover {
    svg {
      path {
        fill: #fff;
      }
    }
  }

  &:active {
    transform: translateY(3px) scale(0.95);
  }
`;

const Button = styled.button`
  padding: 4px;
  border-radius: 15px;
  width: 105px;
  /* background: linear-gradient(144deg, #ff6464 0%, #ffbf59 50%, #47c9ff); */
  /* background: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb); */
  background: linear-gradient(144deg, #f3f520, #a8d102 50%, #00ddeb);
  box-shadow: 5px 5px 30px rgba(4, 4, 4, 0.5),
    -5px -5px 30px rgba(60, 60, 60, 0.5);
  border: none;
  transition: all 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  span {
    padding: 10px 0px;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background-color: #212121;
    color: #fff;
    font-size: 1.7rem;
    font-weight: bold;
    display: flex;
    gap: 4px;
    align-items: center;
    justify-content: center;
    transition: 300ms;
  }

  &:hover span {
    background: none;
  }

  &:hover {
    /* box-shadow: 5px 5px 30px rgba(0, 221, 235, 0.4),
      -5px -5px 30px rgba(175, 64, 255, 0.5); */
    /* background: linear-gradient(144deg, #f3f520, #a8d102 50%, #00ddeb); */
    box-shadow: 5px 5px 30px rgba(0, 221, 235, 0.4),
      -5px -5px 30px rgba(243, 245, 32, 0.3);
  }

  &:active {
    transform: translateY(3px) scale(0.95);
  }

  @media (max-width: 680px) {
    width: 50px;
    min-width: 50px;
    height: 50px;

    p {
      display: none;
    }
  }
`;

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <InputContainer>
      <NavButton
        onClick={() => {
          onSearch(Math.floor(Math.random() * 826) + 1);
          setValue("");
        }}
      >
        <span>
          <svg
            version="1.1"
            id="_x32_"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <defs>
              <linearGradient id="gradient">
                <stop offset="5%" stopColor="#f3f520" />
                <stop offset="70%" stopColor="#a8d102" />
              </linearGradient>
            </defs>
            <g>
              <path
                fill="url(#gradient)"
                d="M454.608,111.204L280.557,6.804C272.992,2.268,264.504,0,256,0c-8.507,0-16.996,2.268-24.557,6.797
		L57.392,111.204c-5.346,3.203-9.916,7.37-13.555,12.192l207.902,124.707c2.622,1.575,5.896,1.575,8.518,0L468.16,123.396
		C464.521,118.574,459.955,114.407,454.608,111.204z M177.16,131.738c-12.056,8.371-31.302,8.16-42.984-0.49
		c-11.684-8.65-11.382-22.463,0.678-30.842c12.056-8.386,31.304-8.16,42.992,0.482C189.525,109.539,189.22,123.344,177.16,131.738z
		 M376.303,134.126c-12.056,8.38-31.306,8.16-42.992-0.49c-11.68-8.65-11.378-22.462,0.685-30.841
		c12.053-8.38,31.302-8.168,42.985,0.482C388.664,111.928,388.359,125.732,376.303,134.126z"
              />
              <path
                fill="url(#gradient)"
                d="M246.136,258.366L38.004,133.523c-2.457,5.802-3.794,12.116-3.794,18.62v208.084
		c0,16.773,8.801,32.311,23.182,40.946l174.051,104.392c5.828,3.496,12.203,5.629,18.714,6.435V265.464
		C250.156,262.556,248.631,259.858,246.136,258.366z M75.845,369.736c-12.052-6.571-21.829-21.671-21.829-33.728
		c0-12.056,9.777-16.502,21.829-9.931c12.056,6.57,21.826,21.671,21.826,33.728C97.671,371.861,87.902,376.306,75.845,369.736z
		 M75.845,247.869c-12.052-6.578-21.829-21.678-21.829-33.728c0-12.056,9.777-16.501,21.829-9.931
		c12.056,6.571,21.826,21.671,21.826,33.728C97.671,249.986,87.902,254.44,75.845,247.869z M136.779,342.014
		c-12.056-6.571-21.826-21.671-21.826-33.728s9.769-16.502,21.826-9.931c12.056,6.571,21.829,21.671,21.829,33.728
		C158.608,344.131,148.835,348.585,136.779,342.014z M197.716,436.158c-12.056-6.571-21.83-21.671-21.83-33.727
		c0-12.049,9.773-16.495,21.83-9.924c12.056,6.57,21.826,21.67,21.826,33.72C219.541,438.284,209.772,442.729,197.716,436.158z
		 M197.716,314.292c-12.056-6.57-21.83-21.671-21.83-33.727c0-12.056,9.773-16.502,21.83-9.931
		c12.056,6.571,21.826,21.671,21.826,33.727C219.541,316.417,209.772,320.863,197.716,314.292z"
              />
              <path
                fill="#a8d102"
                d="M473.992,133.523L265.864,258.366c-2.494,1.492-4.02,4.19-4.02,7.098V512
		c6.506-0.806,12.889-2.939,18.714-6.435l174.051-104.392c14.381-8.635,23.182-24.172,23.182-40.946V152.143
		C477.79,145.64,476.453,139.326,473.992,133.523z M321.232,262.932c12.053-6.571,21.826-2.125,21.826,9.931
		c0,12.049-9.773,27.149-21.826,33.72c-12.06,6.571-21.83,2.125-21.83-9.924C299.402,284.604,309.172,269.503,321.232,262.932z
		 M321.232,448.735c-12.06,6.57-21.83,2.125-21.83-9.931s9.77-27.15,21.83-33.728c12.053-6.571,21.826-2.118,21.826,9.931
		C343.058,427.064,333.285,442.164,321.232,448.735z M322.536,377.663c-12.056,6.571-21.83,2.117-21.83-9.939
		c0-12.048,9.773-27.149,21.83-33.72c12.056-6.57,21.826-2.125,21.826,9.931S334.592,371.085,322.536,377.663z M427.32,386.403
		c-12.056,6.571-21.826,2.125-21.826-9.931c0-12.056,9.769-27.156,21.826-33.72c12.056-6.578,21.829-2.133,21.829,9.924
		C449.149,364.732,439.376,379.833,427.32,386.403z M427.32,315.332c-12.056,6.563-21.826,2.125-21.826-9.931
		c0-12.056,9.769-27.157,21.826-33.728c12.056-6.571,21.829-2.125,21.829,9.931C449.149,293.653,439.376,308.761,427.32,315.332z
		 M427.32,244.253c-12.056,6.57-21.826,2.125-21.826-9.924c0-12.056,9.769-27.157,21.826-33.728
		c12.056-6.571,21.829-2.125,21.829,9.931C449.149,222.582,439.376,237.682,427.32,244.253z"
              />
            </g>
          </svg>
        </span>
      </NavButton>
      <input
        type="search"
        className="input input-alt"
        id="myInput"
        onChange={handleChange}
        value={value}
        placeholder="Search characters by ID. Try 265 for Pickle Rick."
      />
      <span className="input-border input-border-alt"></span>
      <Button
        onClick={() => {
          onSearch(value);
          setValue("");
        }}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
            ></path>
          </svg>
          <p>Add</p>
        </span>
      </Button>
    </InputContainer>
  );
}
