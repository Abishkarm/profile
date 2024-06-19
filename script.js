// script.js

// Function to toggle visibility of skill descriptions
function toggleSkillDescription(skillId) {
    const skillDescription = document.getElementById(skillId);
    if (skillDescription.style.display === 'none' || skillDescription.style.display === '') {
        skillDescription.style.display = 'block';
    } else {
        skillDescription.style.display = 'none';
    }
}

// Add event listeners to each skill name for toggling descriptions
document.addEventListener('DOMContentLoaded', () => {
    const skillNames = document.querySelectorAll('.skill-name');
    skillNames.forEach(skill => {
        skill.addEventListener('click', () => {
            const skillId = skill.dataset.skillId;
            toggleSkillDescription(skillId);
        });
    });

    // Function to toggle visibility of other sections
    function toggleSection(sectionId) {
        const sectionContent = document.getElementById(sectionId);
        if (sectionContent.style.display === 'none' || sectionContent.style.display === '') {
            sectionContent.style.display = 'block';
        } else {
            sectionContent.style.display = 'none';
        }
    }

    // Add event listeners to each section header for toggling content
    const sectionHeaders = document.querySelectorAll('section h2');
    sectionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const sectionId = header.parentNode.id;
            toggleSection(sectionId);
        });
    });
});
