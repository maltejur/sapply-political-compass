<script>
  import { quiz, showIndicators } from "../stores";

  export let big = false;
</script>

<style>
  .mainCompass {
    display: inline-block;
    position: relative;
    width: 100px;
    height: 100px;
  }

  .progCompass {
    display: inline-block;
    position: relative;
    margin-left: 1em;
    background: linear-gradient(180deg, #c8e4bc 0%, #92d9f8 100%);
    height: 100px;
    width: 30px;
    border-left: solid 2px;
  }

  .authLeft,
  .authRight,
  .libLeft,
  .libRight {
    position: absolute;
    width: 50%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    border-color: rgb(54, 54, 54) !important;
  }

  .labelLeft,
  .labelRight,
  .labelAuth,
  .labelLib {
    position: absolute;
    font-size: 10px;
    padding: 0 2px 0 2px;
  }

  .authLeft {
    background-color: #f9baba;
    color: #ff0000;
    border-right: solid 1px;
    border-bottom: solid 1px;
  }

  .authRight {
    background-color: #92d9f8;
    color: #00b3ff;
    right: 0;
    border-left: solid 1px;
    border-bottom: solid 1px;
  }

  .libLeft {
    background-color: #c8e4bc;
    color: #43d300;
    bottom: 0;
    border-right: solid 1px;
    border-top: solid 1px;
  }

  .libRight {
    background-color: #f5f5a7;
    color: #ffbb00;
    right: 0;
    bottom: 0;
    border-left: solid 0.5px;
    border-top: solid 0.5px;
  }

  .labelLeft {
    bottom: 50%;
  }

  .labelRight {
    bottom: 50%;
    right: 0;
  }

  .labelAuth {
    left: 50%;
  }

  .labelLib {
    left: 50%;
    bottom: 0;
  }

  .compassIndicator {
    position: absolute;
    background-color: red;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    box-shadow: 1px 1px 0px 0px black;
    top: calc(50% - 3px);
    left: calc(50% - 3px);
    transition: transform 0.4s ease;
  }

  .progIndicator {
    position: absolute;
    background-color: red;
    width: 100%;
    height: 2px;
    box-shadow: 0px 1px 0px 0px black;
    left: 0;
    top: calc(50% - 1px);
    transition: transform 0.4s ease;
  }
</style>

{#if big}
  <style>
    .wrapper {
      transform-origin: top left;
      transform: scale(2);
    }
  </style>
{/if}

{#if !$showIndicators}
  <style>
    .compassIndicator,
    .progIndicator {
      display: none;
    }
  </style>
  <style>
    .labelLeft,
    .labelRight,
    .labelAuth,
    .labelLib {
      display: none;
    }
  </style>
{:else if $quiz}
  <style>
    .mainCompass span {
      display: none;
    }
  </style>
{/if}

<div class="wrapper">
  <div class="mainCompass">
    <div class="authLeft"><span>S</span></div>
    <div class="authRight"><span>P</span></div>
    <div class="libLeft"><span>C</span></div>
    <div class="libRight"><span>T</span></div>
    <div class="labelLeft">Left</div>
    <div class="labelRight">Right</div>
    <div class="labelAuth">Auth</div>
    <div class="labelLib">Lib</div>
    {#if $quiz}
      <div
        class="compassIndicator"
        style="transform: translate({$quiz.position.right * 50}px, {-$quiz.position.auth * 50}px)" />
    {/if}
  </div>
  <div class="progCompass">
    {#if $quiz}
      <div
        class="progIndicator"
        style="transform: translateY({-$quiz.position.prog * 50}px)" />
    {/if}
  </div>
</div>
