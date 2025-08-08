import { ABIs } from '../abi';

const tokens = {
    PLSN: {
        name: "PLSN",
        hasWrapper: true,
        token: {
            address: "0xf651e3978f1f6ec38a6da6014caa6aa07fbae453",
            abi: ABIs.taxtoken
        },
        wrappedToken: {
            address: "0xb6c636eD29FE9fFc2A7554366e748791B1BA98c0",
            abi: ABIs.wrappedToken
        },
        distributor: {
            address: "0xd097429a1188b79baad4453333466a38a75e4a97",
            abi: ABIs.dividenddistributor
        },
        rewardtoken: {
            name: "USDL",
            address: "0x0dEEd1486bc52aA0d3E6f8849cEC5adD6598A162"
        }
    },

    GAIN: {
        name: "GAIN",
        hasWrapper: false,
        token: {
            address: "0xA7589c33aF2AEedD0fC5a5e6d51d6af5Bd5F15Fd",
            abi: ABIs.taxtoken
        },
        distributor: {
            address: "0x58eb492e2f481cecef96f343f67602cb7b2b8b89",
            abi: ABIs.dividenddistributor
        },
        rewardtoken: {
            name: "PLSN",
            address: "0xF651E3978f1F6ec38a6da6014caA6AA07fBae453"
        }
    },

    HXTRA: {
        name: "HXTRA",
        hasWrapper: false,
        token: {
            address: "0x38bBF608a69400541DBE6FD2D73991EBC79be78D",
            abi: ABIs.taxtoken
        },
        distributor: {
            address: "0x6a25e372c376ff19ec8144f5b1bf2904556106c4",
            abi: ABIs.dividenddistributor
        },
        rewardtoken: {
            name: "HEX",
            address: "0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39",
            decimals: "8"
        }
    },

    INCR: {
        name: "INCR",
        hasWrapper: false,
        token: {
            address: "0xA03F9916Dd3BB1092Daa50B12DFE83c92dB89752",
            abi: ABIs.taxtoken
        },
        distributor: {
            address: "0x5cfdf25fa32da00cd7c32a747c98fa32d325bf55",
            abi: ABIs.dividenddistributor
        },
        rewardtoken: {
            name: "INC",
            address: "0x2fa878Ab3F87CC1C9737Fc071108F904c0B0C95d",
            decimals: "18"
        }
    }
};

export default tokens;
