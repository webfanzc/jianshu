import styled from 'styled-components'
import logo from './../../static/images/nav-logo.png'
export const HeaderWrapper = styled.header`
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
  min-width: 960px;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
`
export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logo}) no-repeat center center/contain;
`
export const Nav = styled.nav`
  width: 960px;
  height: 100%;
  padding: 0 220px 0 100px;
  margin: 0 auto;
  line-height: 56px;
  font-size: 17px;
`
export const NavItem = styled.a`
  padding: 0 15px;
  color: #333333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`
export const SearchWrapper = styled.div`
  position: relative;
  display: inline-block;
  .icon-sousuo {
    position: absolute;
    right: 5px;
    bottom: 5px;
    cursor: pointer;
    width: 30px;
    line-height: 30px;
    border-radius: 50%;
    text-align: center;
  }
`
export const NavSearch = styled.input`
  width: 180px;
  height: 38px;
  border: none;
  margin-top: 9px;
  margin-left: 20px;
  border-radius: 19px;
  padding: 0 50px 0 20px;
  background: #eee;
  font-size: 14px;
  color: #666;
  transition: all 0.3s ease-in-out;
  &::placeholder {
    color: #999;
  }
  &.focusedInput {
    background: #eaeaea;
    width: 240px;
  }
`
export const SearchHot = styled.div`
  position: absolute;
  z-index: 10;
  left: 20px;
  top: 66px;
  width: 240px;
  padding: 0 20px 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  background-color: #fff;

  &::before {
    position: absolute;
    background-color: #fff;
    content: '';
    left: 27px;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    top: -5px;
    z-index: -1;
  }
`
export const HotTitle = styled.div`
  margin: 20px 0 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`
export const HotSwitch = styled.div`
  font-size: 13px;
  float: right;
  cursor: pointer;
  .icon-spin {
    display: inline-block;
    transition: all 0.3s ease-in-out;
    transform-origin: center center;
    transform: rotate(80deg);
  }
`
export const HotList = styled.ul`
  font-size: 12px;
  color: #333;
  line-height: 28px;
`
export const HotListItem = styled.li`
  display: inline-block;
  margin-right: 10px;
  span {
    padding: 2px 6px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
      border: 1px solid #999;
    }
  }
`
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 9px;
`
export const Button = styled.button`
  font-size: 15px;
  border: none;
  margin: 0 10px;
  &.sign-up {
    height: 38px;
    width: 80px;
    border-radius: 19px;
    background-color: #fff;
    color: #ec6149;
    border: 1px solid currentColor;
  }
  &.write {
    height: 40px;
    width: 100px;
    background: #ea6f5a;
    border-radius: 20px;
    color: #fff;
  }
`
export const Icon = styled.i`
  margin-right: 5px;
  font-size: 20px;
  transition: all 0.3s ease-in-out;
  &.icon-ai231 {
    font-size: 22px;
    margin-top: 2px;
  }
  &.focusedIcon {
    background-color: #ccc;
  }
`
