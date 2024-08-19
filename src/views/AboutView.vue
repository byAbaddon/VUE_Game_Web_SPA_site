<template>
  <div>
    <v-img class="my-6" max-height="700" aspect-ratio="16/9" cover src="/public/logoGdevelop.png"></v-img>

    <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <h1 class="text-h4 font-weight-bold text-decoration-underline  my-6 pb-4">GDEVELOP</h1>
        <h4 class="subheading"> {{ textData }} </h4>
      </div>
    </v-parallax>

  </div>
</template>



<script setup>
const textData = `GDevelop Presentation\n
1. Introduction\n
What is GDevelop?\n
GDevelop is a free and open-source game development tool.\n
Ideal for all levels, it provides a visual editor for creating games without coding.\n
2. Key Features\n
Intuitive Interface\n
- Drag-and-drop functionality for easy game creation.\n
No Coding Required\n
- Uses event-based logic instead of traditional programming.\n
Cross-Platform\n
- Export games to Windows, Mac, Linux, Android, and HTML5.\n
Powerful Editing Tools\n
- Visual scene editor, animation editor, and physics tools.\n
Templates and Examples\n
- Includes various templates and examples to get started quickly.\n
3. How It Works\n
Design Scenes\n
- Create scenes and add objects using drag-and-drop.\n
Set Up Events\n
- Define object behaviors with a visual event editor.\n
Animations and Physics\n
- Add animations and set physical properties like gravity and friction.\n
Testing and Exporting\n
- Test your game in real-time and export it for different platforms.\n
4. Benefits\n
Free and Open-Source\n
- Full access to source code with no licensing fees.\n
Suitable for All Experience Levels\n
- Easy for beginners, powerful for advanced users.\n
Active Community\n
- Access to resources, guides, and community support.\n
5. Getting Started\n
Download GDevelop\n
- Get the latest version from GDevelop's official website.\n
Explore Resources\n
- Use tutorials and videos available online.\n
Start a Project\n
- Create a new project, experiment with templates, and build your game.\n
Join the Community\n
- Participate in forums and groups for support and tips.\n
6. Conclusion\n
GDevelop is a powerful and accessible game development tool with an intuitive interface and robust features, perfect for creating interactive and creative projects without complex coding.`;

</script>

<style scoped>
h4 {
  white-space: pre-line;
  text-align: center;
}
</style>