import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  img {
    height: 10rem;
    width: 10rem;
  }
`;

const Topics = styled.div`
  width: 30%;
  display: flex;
  align-content: center;
  justify-content: space-around;
  span {
    color: #345a4d;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;
    display: inline-block;
    padding: 15px 20px;
    position: relative;
    cursor: pointer;
  }
  span:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #345a4d;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  span:hover:after {
    width: 100%;
    left: 0;
  }
`;

export { Topics, Container };
