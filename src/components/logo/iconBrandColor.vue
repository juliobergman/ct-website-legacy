<template>
  <q-icon>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 128 128"
      v-if="dark"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="30.49"
          y1="79.39"
          x2="101.2"
          y2="9.49"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#580000" />
          <stop offset="0.21" stop-color="#980000" />
          <stop offset="0.52" stop-color="red" />
          <stop offset="1" stop-color="#870000" />
        </linearGradient>
        <linearGradient
          id="Gold_08"
          data-name="Gold 08"
          x1="30.64"
          y1="43.9"
          x2="109.2"
          y2="43.9"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#ffa81b" />
          <stop offset="0.13" stop-color="#ffd54f" />
          <stop offset="0.17" stop-color="#ffd54f" />
          <stop offset="0.29" stop-color="#ffa61a" />
          <stop offset="0.35" stop-color="#ffa61a" />
          <stop offset="0.46" stop-color="#fed24f" />
          <stop offset="0.52" stop-color="#fed24f" />
          <stop offset="0.62" stop-color="#ffa61a" />
          <stop offset="0.67" stop-color="#ffa61a" />
          <stop offset="0.8" stop-color="#ffd34e" />
          <stop offset="0.84" stop-color="#ffd34e" />
          <stop offset="1" stop-color="#ffa61a" />
        </linearGradient>
      </defs>
      <path
        d="M122.52,99.83A64,64,0,1,1,70,0,63.42,63.42,0,0,1,92.51,4.28c8,3.76,8.58,7.1,8.69,9.27.08,1.5-.83,3.23-8.57,7.87l-.71.41a47.76,47.76,0,0,0-70.2,43.55c.69,24.27,21.53,45.38,45.78,46.36a47.63,47.63,0,0,0,37.9-16.26,7.58,7.58,0,0,1,10.42-1Z"
        style="fill: #fff"
      />
      <path
        d="M69.48,106.16a42.63,42.63,0,0,0,8.89-.94V53.83C72.12,56.39,66,59,60.28,61.67v43.48A42.31,42.31,0,0,0,69.48,106.16Z"
        style="fill: #fff"
      />
      <g>
        <path
          d="M73.65,46.07c25.12-10,41.12-28.42,26.9-38,2.08,1.79,3.07,3.61,3.07,5.51,0,3-3.86,6.41-9.75,9.94C77.4,33.36,56.16,37.44,40.6,51,29.35,60.83,29,67.82,30.64,79.77,35.77,64.06,55.48,53.3,73.65,46.07Z"
          style="fill: url(#linear-gradient)"
        />
        <path
          d="M100.55,8c14.22,9.61-1.78,28-26.9,38-18.17,7.23-37.88,18-43,33.7,6-10.78,27.72-20.44,48.81-29S109.2,31.67,109.2,21.54C109.2,19.18,108.36,13.08,100.55,8Z"
          style="fill: url(#Gold_08)"
        />
      </g>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 128 128"
      v-if="!dark"
    >
      <defs>
        <clipPath id="clip-path">
          <path
            d="M122.52,99.83A64,64,0,1,1,70,0,63.42,63.42,0,0,1,92.51,4.28c8,3.76,8.58,7.1,8.69,9.27.08,1.5-.83,3.23-8.57,7.87l-.71.41a47.76,47.76,0,0,0-70.2,43.55c.69,24.27,21.53,45.38,45.78,46.36a47.63,47.63,0,0,0,37.9-16.26,7.58,7.58,0,0,1,10.42-1Z"
            style="fill: none"
          />
        </clipPath>
        <clipPath id="clip-path-2">
          <rect
            x="0.48"
            y="-5"
            width="127.04"
            height="138"
            style="fill: none"
          />
        </clipPath>
        <linearGradient
          id="New_Gradient_Swatch_3"
          data-name="New Gradient Swatch 3"
          x1="61.98"
          y1="130.5"
          x2="75.18"
          y2="46.03"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#4d4d4d" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="linear-gradient"
          x1="30.49"
          y1="79.39"
          x2="101.2"
          y2="9.49"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#580000" />
          <stop offset="0.21" stop-color="#980000" />
          <stop offset="0.52" stop-color="red" />
          <stop offset="1" stop-color="#870000" />
        </linearGradient>
        <linearGradient
          id="Gold_08"
          data-name="Gold 08"
          x1="30.64"
          y1="43.9"
          x2="109.2"
          y2="43.9"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#ffa81b" />
          <stop offset="0.13" stop-color="#ffd54f" />
          <stop offset="0.17" stop-color="#ffd54f" />
          <stop offset="0.29" stop-color="#ffa61a" />
          <stop offset="0.35" stop-color="#ffa61a" />
          <stop offset="0.46" stop-color="#fed24f" />
          <stop offset="0.52" stop-color="#fed24f" />
          <stop offset="0.62" stop-color="#ffa61a" />
          <stop offset="0.67" stop-color="#ffa61a" />
          <stop offset="0.8" stop-color="#ffd34e" />
          <stop offset="0.84" stop-color="#ffd34e" />
          <stop offset="1" stop-color="#ffa61a" />
        </linearGradient>
      </defs>
      <g style="clip-path: url(#clip-path)">
        <g style="clip-path: url(#clip-path-2)">
          <image
            width="265"
            height="288"
            transform="translate(0.48 -5.04) scale(0.48)"
            xlink:href="data:image/png;base64,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"
          />
        </g>
      </g>
      <path
        d="M69.48,106.16a42.63,42.63,0,0,0,8.89-.94V53.83C72.12,56.39,66,59,60.28,61.67v43.48A42.31,42.31,0,0,0,69.48,106.16Z"
        style="fill: url(#New_Gradient_Swatch_3)"
      />
      <g>
        <path
          d="M73.65,46.07c25.12-10,41.12-28.42,26.9-38,2.08,1.79,3.07,3.61,3.07,5.51,0,3-3.86,6.41-9.75,9.94C77.4,33.36,56.16,37.44,40.6,51,29.35,60.83,29,67.82,30.64,79.77,35.77,64.06,55.48,53.3,73.65,46.07Z"
          style="fill: url(#linear-gradient)"
        />
        <path
          d="M100.55,8c14.22,9.61-1.78,28-26.9,38-18.17,7.23-37.88,18-43,33.7,6-10.78,27.72-20.44,48.81-29S109.2,31.67,109.2,21.54C109.2,19.18,108.36,13.08,100.55,8Z"
          style="fill: url(#Gold_08)"
        />
      </g>
    </svg>
  </q-icon>
</template>
<script setup>
import { computed } from "vue";

const props = defineProps({
  dark: {
    type: Boolean,
    default: false,
  },
});

const dark = computed(() => props.dark);
</script>
