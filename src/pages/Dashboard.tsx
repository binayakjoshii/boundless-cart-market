
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from 'recharts';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  MessageCircle, 
  Heart, 
  Share2,
  Eye,
  BarChart3,
  Calendar,
  Download
} from 'lucide-react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

// Mock data for social media metrics
const platformData = [
  { platform: 'Facebook', followers: 12500, engagement: 4.2, posts: 45, color: '#1877F2' },
  { platform: 'Instagram', followers: 8900, engagement: 6.8, posts: 62, color: '#E4405F' },
  { platform: 'Twitter', followers: 5600, engagement: 3.1, posts: 78, color: '#1DA1F2' },
  { platform: 'LinkedIn', followers: 3200, engagement: 5.5, posts: 23, color: '#0A66C2' },
  { platform: 'TikTok', followers: 15600, engagement: 8.9, posts: 34, color: '#000000' },
  { platform: 'YouTube', followers: 4500, engagement: 7.2, posts: 12, color: '#FF0000' }
];

const weeklyData = [
  { day: 'Mon', likes: 240, comments: 45, shares: 12, views: 1200 },
  { day: 'Tue', likes: 320, comments: 62, shares: 18, views: 1450 },
  { day: 'Wed', likes: 180, comments: 28, shares: 8, views: 980 },
  { day: 'Thu', likes: 450, comments: 89, shares: 25, views: 1850 },
  { day: 'Fri', likes: 380, comments: 71, shares: 22, views: 1620 },
  { day: 'Sat', likes: 520, comments: 95, shares: 35, views: 2100 },
  { day: 'Sun', likes: 290, comments: 48, shares: 15, views: 1300 }
];

const monthlyGrowth = [
  { month: 'Jan', followers: 42000, engagement: 4.1 },
  { month: 'Feb', followers: 43200, engagement: 4.3 },
  { month: 'Mar', followers: 44800, engagement: 4.6 },
  { month: 'Apr', followers: 46500, engagement: 4.8 },
  { month: 'May', followers: 48900, engagement: 5.2 },
  { month: 'Jun', followers: 50300, engagement: 5.4 }
];

const topPosts = [
  { id: 1, platform: 'Instagram', content: 'Summer collection launch...', likes: 892, comments: 156, shares: 45 },
  { id: 2, platform: 'TikTok', content: 'Behind the scenes video...', likes: 1240, comments: 89, shares: 67 },
  { id: 3, platform: 'Facebook', content: 'Customer testimonial post...', likes: 567, comments: 78, shares: 23 },
  { id: 4, platform: 'Twitter', content: 'Industry insights thread...', likes: 234, comments: 45, shares: 89 }
];

const chartConfig = {
  likes: { label: "Likes", color: "#E4405F" },
  comments: { label: "Comments", color: "#1DA1F2" },
  shares: { label: "Shares", color: "#0A66C2" },
  views: { label: "Views", color: "#FF0000" },
  followers: { label: "Followers", color: "#1877F2" },
  engagement: { label: "Engagement", color: "#0A66C2" }
};

const Dashboard = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('all');

  const totalFollowers = platformData.reduce((sum, platform) => sum + platform.followers, 0);
  const avgEngagement = platformData.reduce((sum, platform) => sum + platform.engagement, 0) / platformData.length;
  const totalPosts = platformData.reduce((sum, platform) => sum + platform.posts, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Social Media Dashboard</h1>
            <p className="text-muted-foreground mt-2">Track and analyze your social media performance</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              Last 30 Days
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Followers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalFollowers.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                +12.5% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Engagement Rate</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{avgEngagement.toFixed(1)}%</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                +2.1% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
              <MessageCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalPosts}</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <TrendingDown className="h-3 w-3 mr-1 text-red-500" />
                -3.2% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Reach</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.4M</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                +18.7% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="platforms">Platforms</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Engagement</CardTitle>
                  <CardDescription>Likes, comments, and shares over the past week</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={weeklyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Area type="monotone" dataKey="likes" stackId="1" stroke="#E4405F" fill="#E4405F" fillOpacity={0.6} />
                        <Area type="monotone" dataKey="comments" stackId="1" stroke="#1DA1F2" fill="#1DA1F2" fillOpacity={0.6} />
                        <Area type="monotone" dataKey="shares" stackId="1" stroke="#0A66C2" fill="#0A66C2" fillOpacity={0.6} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Platform Distribution</CardTitle>
                  <CardDescription>Follower distribution across platforms</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={platformData}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="followers"
                          label={({ platform, percent }) => `${platform} ${(percent * 100).toFixed(0)}%`}
                        >
                          {platformData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Growth Trends</CardTitle>
                <CardDescription>Follower growth and engagement rate over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={monthlyGrowth}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar yAxisId="left" dataKey="followers" fill="#1877F2" />
                      <Line yAxisId="right" type="monotone" dataKey="engagement" stroke="#0A66C2" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="platforms" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platformData.map((platform) => (
                <Card key={platform.platform}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {platform.platform}
                      <div className="w-4 h-4 rounded" style={{ backgroundColor: platform.color }} />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Followers</p>
                        <p className="text-xl font-bold">{platform.followers.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Engagement</p>
                        <p className="text-xl font-bold">{platform.engagement}%</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Posts this month</p>
                      <p className="text-xl font-bold">{platform.posts}</p>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="h-2 rounded-full" 
                        style={{ 
                          width: `${(platform.engagement / 10) * 100}%`,
                          backgroundColor: platform.color 
                        }}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Posts</CardTitle>
                <CardDescription>Your best content from the past month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPosts.map((post) => (
                    <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-medium px-2 py-1 bg-secondary rounded">
                            {post.platform}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{post.content}</p>
                      </div>
                      <div className="flex gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          {post.likes}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          {post.comments}
                        </div>
                        <div className="flex items-center gap-1">
                          <Share2 className="h-4 w-4" />
                          {post.shares}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Engagement by Platform</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={platformData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="platform" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="engagement" fill="#0A66C2" />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Weekly Views</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={weeklyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Line type="monotone" dataKey="views" stroke="#FF0000" strokeWidth={3} />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Detailed Analytics</CardTitle>
                <CardDescription>Comprehensive metrics breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Platform</th>
                        <th className="text-left p-2">Followers</th>
                        <th className="text-left p-2">Engagement Rate</th>
                        <th className="text-left p-2">Posts</th>
                        <th className="text-left p-2">Avg Likes/Post</th>
                      </tr>
                    </thead>
                    <tbody>
                      {platformData.map((platform) => (
                        <tr key={platform.platform} className="border-b">
                          <td className="p-2 font-medium">{platform.platform}</td>
                          <td className="p-2">{platform.followers.toLocaleString()}</td>
                          <td className="p-2">{platform.engagement}%</td>
                          <td className="p-2">{platform.posts}</td>
                          <td className="p-2">{Math.round(platform.followers * (platform.engagement / 100) / platform.posts)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
