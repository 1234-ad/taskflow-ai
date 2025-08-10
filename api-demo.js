// TaskFlow AI - API Demo
// This demonstrates the core API endpoints for our SaaS platform

class TaskFlowAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseURL = 'https://api.taskflow.ai/v1';
    }

    // AI-powered task creation
    async createIntelligentTask(projectId, description) {
        const response = await fetch(`${this.baseURL}/projects/${projectId}/tasks/intelligent`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                description,
                aiAnalysis: true,
                autoAssign: true,
                predictDeadline: true
            })
        });
        return response.json();
    }

    // Get AI insights for project
    async getProjectInsights(projectId) {
        const response = await fetch(`${this.baseURL}/projects/${projectId}/insights`, {
            headers: {
                'Authorization': `Bearer ${this.apiKey}`
            }
        });
        return response.json();
    }

    // Predictive analytics
    async getCompletionPrediction(projectId) {
        const response = await fetch(`${this.baseURL}/projects/${projectId}/predict`, {
            headers: {
                'Authorization': `Bearer ${this.apiKey}`
            }
        });
        return response.json();
    }
}

// Example usage
const api = new TaskFlowAPI('your-api-key-here');

// Demo data
const demoProject = {
    id: 'proj_123',
    name: 'TaskFlow AI Launch',
    status: 'in_progress',
    completion: 87,
    daysAhead: 3,
    team: ['alex.chen', 'sarah.kim', 'mike.johnson'],
    aiInsights: [
        'Project is 3 days ahead of schedule',
        'Consider reallocating Sarah to mobile app project',
        'Security audit can be parallelized with current tasks'
    ]
};

console.log('TaskFlow AI - SaaS Platform Demo');
console.log('================================');
console.log('Project:', demoProject.name);
console.log('Completion:', demoProject.completion + '%');
console.log('Status: Ahead of schedule by', demoProject.daysAhead, 'days');
console.log('AI Insights:', demoProject.aiInsights);