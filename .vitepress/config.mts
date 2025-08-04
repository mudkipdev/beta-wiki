import { defineConfig } from "vitepress";

export default defineConfig({
    title: "Beta Wiki",
    description: "A wiki documenting Minecraft Beta 1.7.3's network protocol and other technical specifications.",
    themeConfig: {
        sidebar: [
            {
                text: "Networking",
                items: [
                    {
                        text: "Data Types",
                        link: "/networking/data-types"
                    },
                    {
                        text: "Packets",
                        link: "/networking/packets"
                    },
                    {
                        text: "Login Flow",
                        link: "/networking/login-flow"
                    },
                    {
                        text: "Effects",
                        link: "/networking/effects"
                    },
                    {
                        text: "Entity Metadata",
                        link: "/networking/entity-metadata"
                    }
                ]
            },

            {
                text: "World Format",
                items: []
            },

            {
                text: "World Generation",
                items: []
            },

            {
                text: "Resources",
                items: [
                    {
                        text: "Protocol Documentation",
                        link: "https://minecraft.wiki/w/Minecraft_Wiki:Projects/wiki.vg_merge/Protocol?oldid=2769763"
                    },
                    {
                        text: "NBT",
                        link: "https://minecraft.wiki/w/NBT_format"
                    }
                ]
            }
        ],

        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/mudkipdev/beta-wiki"
            }
        ]
    }
})
