<template>
  <header
    :class="{
      'is-open': isOpen,
      'is-closed': isClosed,
    }"
    class="header">
    <div class="header__inner  wrapper">
      <a
        href="/"
        class="header__logo  t-logo"
      >Deima Ba</a>
      <button
        type="button"
        class="header__toggle"
        @click="toggleNav"
      ><span class="header__burger"/>
      </button>
    </div>
    <nav class="header__nav  wrapper">
      <ul class="header__linklist  header__linklist--primary">
        <li class="header__link">
          <button
            :class="{'is-open': dropdown.height !== 0 }"
            type="button"
            class="header__dropdown"
            @click="toggleDropdown"
          >Work</button>
          <div
            :style="{ height: `${dropdown.height}px` }"
            :class="{'is-open': dropdown.height !== 0 }"
            class="header__dropdown-container  js-dropdown-container">
            <ul
              ref="dropdown"
              class="header__linklist  header__linklist--secondary"
            >
              <li class="header__link--secondary">
                <a href="#">all</a>
              </li>
              <li class="header__link--secondary">
                <a href="#">filter 1</a>
              </li>
              <li class="header__link--secondary">
                <a href="#">filter 2</a>
              </li>
              <li class="header__link--secondary">
                <a href="#">filter 3</a>
              </li>
            </ul>
          </div>
        </li>
        <li class="header__link">
          <a href="#">Prints</a>
        </li>
        <li class="header__link">
          <a href="#">About</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isClosed: false,
      isOpen: false,
      dropdown: {
        isOpen: false,
        height: 0,
      },
    }
  },

  methods: {
    resetDropdown() {
      this.dropdown.isOpen = false
      this.dropdown.height = 0
    },
    resetNav() {
      this.isOpen = false
      this.isClosed = false
    },
    toggleDropdown() {
      const { dropdown } = this.$refs
      const dropdownHeight = dropdown.getBoundingClientRect().height

      if (this.dropdown.isOpen) {
        this.dropdown.isOpen = false
        this.dropdown.height = 0
      } else {
        this.dropdown.isOpen = true
        this.dropdown.height = dropdownHeight
      }
    },
    toggleNav() {
      if (this.isOpen) {
        this.isClosed = true
      } else {
        this.isOpen = true
      }

      if (this.isOpen && this.isClosed) {
        setTimeout(() => {
          this.resetDropdown()
          this.resetNav()
        }, 200)
      }
    },
  },
}
</script>

<style lang="postcss">
@import "../assets/style/settings/vars";

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: transparent;
  height: var(--header-sm);
  transition: color var(--trans), background-color var(--trans);

  @media(--sm) {
    width: 25%;
    height: var(--header-lg);
  }

  &.is-open {
    color: var(--white);
  }

  &.is-open.is-closed {
    color: var(--black);
  }
}

.header__inner {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%;
  width: 100%;
  z-index: var(--z1);
}

.header__toggle {
  padding: var(--bsu-lg) var(--bsu);
}

.header__burger {
  position: relative;
  display: block;
  width: 25px;
  height: 0;
  background-color: var(--black);

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    width: 25px;
    height: 1px;
    background-color: var(--black);
    transform: translateZ(0) rotate(0deg);
    transition:
      top var(--trans) calc(var(--speed) / 2),
      transform var(--trans);
  }

  &:before {
    top: -5px;
  }

  &:after {
    top: 5px;
  }

  .header.is-open & {

    &:before,
    &:after {
      background-color: var(--white);
      transition:
        background-color var(--trans),
        top var(--trans),
        transform var(--trans) var(--speed);
    }

    &:before {
      top: 0;
      transform: translateZ(0) rotate(45deg);
    }

    &:after {
      top: 0;
      transform: translateZ(0) rotate(-45deg);
    }
  }

  .header.is-open.is-closed & {
    &:before,
    &:after {
      background-color: var(--black);
      transition: background-color var(--trans);
    }
  }
}

.header__nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: var(--bsu-xxl);
  padding-bottom: var(--bsu-xxl);
  background-color: var(--white);
  transform: translateX(-100%) translateZ(0);
  will-change: transform;
  transition: color var(--trans), background-color var(--trans);

  .header.is-open & {
    transform: translateX(0) translateZ(0);
    transition: transform var(--speed) var(--trans-inout);
    color: var(--white);
    background-color: var(--highlight2);
  }

  .header.is-closed & {
    transform: translateX(100%) translateZ(0);
    transition: transform var(--speed) var(--trans-inout);
  }
}

.header__linklist {
  margin-bottom: 0;
}

.header__link,
.header__link--secondary {
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.125em;
  text-transform: uppercase;
  opacity: 0;
  visibility: hidden;
  transform: rotateX(-90deg);

  & a {
    display: inline-block;
    padding: var(--bsu);
    margin-left: -var(--bsu);
  }
}

.header__dropdown-container {
  height: 0;
  overflow: hidden;
  transition: height var(--speed) var(--trans-inout);
}

.header__dropdown {
  position: relative;
  display: inline-block;
  padding: var(--bsu) var(--bsu-lg) var(--bsu) var(--bsu);
  margin-left: -var(--bsu);

  &:before,
  &:after {
    content: '';
    height: 1px;
    width: 10px;
    transform-origin: 50% 50%;
    position: absolute;
    right: var(--bsu);
    top: 2.2em;
    background-color: var(--white);
    transition: transform var(--trans);
  }

  &:after {
    transform: rotate(90deg) translateZ(0);
  }

  &.is-open {

    &:after {
      transform: rotate(0deg) translateZ(0);
    }
  }
}

.header.is-open .header__link,
.header__dropdown-container.is-open .header__link--secondary {
  opacity: 1;
  visibility: visible;
  transform: rotateX(0);
  transition:
    opacity var(--speed2) var(--ease),
    transform var(--trans),
    visibility var(--trans);

  &:nth-child(1) {
    transition-delay: 275ms;
  }

  &:nth-child(2) {
    transition-delay: 325ms;
  }

  &:nth-child(3) {
    transition-delay: 425ms;
  }

  &:nth-child(4) {
    transition-delay: 425ms;
  }
}
</style>
