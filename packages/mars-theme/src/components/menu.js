import React from "react";
import { styled, connect, Global } from "frontity";
import { CloseIcon, HamburgerIcon } from "./menu-icon";
import MenuModal from "./menu-modal";

const breakpoints = [576, 768, 992, 1720];

const mq = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
)

function MobileMenu({ state, actions }) {
  const { isMobileMenuOpen } = state.theme;
  return (
    <>
      <MenuToggle onClick={actions.theme.toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <>
            {/* Add some style to the body when menu is open,
            to prevent body scroll */}
            <Global styles={{ body: { overflowY: "hidden" } }} />
            <CloseIcon color="#314452" size="20px" />
          </>
        ) : (
          <HamburgerIcon color="#314452" size="24px" />
        )}
      </MenuToggle>
      {/* If the menu is open, render the menu modal */}
      {isMobileMenuOpen && <MenuModal />}
    </>
  );
}

const MenuToggle = styled.button`
  position: absolute;
  right: 84px;
  top: 84px;
  background: transparent;
  border: 0;
  color: #314452;
  z-index: 5;
  height: 40px;
  width: 40px;

  @media (max-width: 560px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${mq[0]} {
    top: 63px;
    right: 50px;
  }
`;

export default connect(MobileMenu);
