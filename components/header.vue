<template>
  <header class="header">
    <div class="header__inner  wrapper">
      <a
        href="/"
        class="header__logo  t-logo"
      >Deima Ba</a>
      <button
        type="button"
        class="header__toggle">
        <span class="header__burger"/>
      </button>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="postcss">
@import "../assets/style/settings/vars";

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--highlight1);
  height: var(--header-sm);

  @media(--sm) {
    width: 25%;
    height: var(--header-lg);
  }
}

.header__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%;
  width: 100%;
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
      top var(--trans) var(--speed),
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
      transition:
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
}
</style>
