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
        @click="toggle"
      ><span class="header__burger"/>
      </button>
    </div>
    <nav class="header__nav  wrapper">
      <ul class="header__linklist">
        <li class="header__link">
          <a href="#">Work</a>
          <ul class="header__linklist  header__linklist--secondary">
            <li class="header__link">
              <a href="#">filter 1</a>
            </li>
            <li class="header__link">
              <a href="#">filter 2</a>
            </li>
            <li class="header__link">
              <a href="#">filter 3</a>
            </li>
          </ul>
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
    }
  },

  methods: {
    toggle() {
      if (this.isOpen) {
        this.isClosed = true
      } else {
        this.isOpen = true
      }

      if (this.isOpen && this.isClosed) {
        setTimeout(() => {
          this.isOpen = false
          this.isClosed = false
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

.header__link {
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.125em;
  text-transform: uppercase;

  & a {
    display: block;
    padding: var(--bsu);
    margin-left: -var(--bsu);
  }

  .header__linklist--secondary & {
    font-size: 14px;
  }
}
</style>
